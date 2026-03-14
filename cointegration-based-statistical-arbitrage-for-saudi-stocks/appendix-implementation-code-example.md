# Appendix: Implementation Code Example

```python
import pandas as pd
import numpy as np
import statsmodels.api as sm
from statsmodels.tsa.stattools import adfuller, coint
import matplotlib.pyplot as plt

# Load Saudi stock data (example using two stocks)
def load_saudi_stock_data(ticker1, ticker2, start_date, end_date):
    # Implementation for loading Saudi stock data
    # Return dataframe with closing prices
    pass

# Calculate hedge ratio (β) using OLS
def calculate_hedge_ratio(x, y):
    x = sm.add_constant(x)
    model = sm.OLS(y, x).fit()
    beta = model.params[1]
    return beta, model.resid

# Test for cointegration
def test_cointegration(x, y):
    # Engle-Granger test
    _, pvalue, _ = coint(x, y)
    return pvalue < 0.05  # True if cointegrated at 5% significance

# Calculate z-score of spread
def calculate_zscore(spread):
    return (spread - spread.mean()) / spread.std()

# Trading strategy
def generate_signals(zscore, entry_threshold=2.0, exit_threshold=0):
    signals = np.zeros_like(zscore)
    
    # Long signals (zscore < -entry_threshold)
    signals[zscore < -entry_threshold] = 1
    
    # Short signals (zscore > entry_threshold)
    signals[zscore > entry_threshold] = -1
    
    # Exit long positions (zscore > exit_threshold)
    long_exit = (signals.shift(1) == 1) & (zscore > exit_threshold)
    
    # Exit short positions (zscore < exit_threshold)
    short_exit = (signals.shift(1) == -1) & (zscore < exit_threshold)
    
    # Apply exits
    signals[long_exit | short_exit] = 0
    
    return signals

# Main implementation
def implement_pairs_trading(ticker1, ticker2, start_date, end_date):
    # Load data
    data = load_saudi_stock_data(ticker1, ticker2, start_date, end_date)
    
    # Calculate hedge ratio (β)
    beta, residuals = calculate_hedge_ratio(data[ticker2], data[ticker1])
    
    # Construct spread series (Zt = Xt - β·Yt)
    spread = data[ticker1] - beta * data[ticker2]
    
    # Check for cointegration
    is_cointegrated = test_cointegration(data[ticker1], data[ticker2])
    
    if not is_cointegrated:
        print("Warning: Stocks do not appear to be cointegrated")
        
    # Calculate z-score
    zscore = calculate_zscore(spread)
    
    # Generate trading signals
    signals = generate_signals(zscore, entry_threshold=1.5, exit_threshold=0)
    
    # Calculate strategy returns
    # Long spread: Long ticker1, Short ticker2*beta
    # Short spread: Short ticker1, Long ticker2*beta
    returns = pd.Series(index=signals.index)
    
    # For simplicity, assuming equal capital allocation and no transaction costs
    ticker1_rets = data[ticker1].pct_change()
    ticker2_rets = data[ticker2].pct_change()
    
    # Calculate strategy returns
    returns = signals.shift(1) * ticker1_rets - signals.shift(1) * beta * ticker2_rets
    
    # Performance metrics
    sharpe_ratio = returns.mean() / returns.std() * np.sqrt(252)
    annual_return = returns.mean() * 252
    drawdown = (returns.cumsum() - returns.cumsum().cummax())
    max_drawdown = drawdown.min()
    
    print(f"Pair: {ticker1}-{ticker2}")
    print(f"Beta coefficient: {beta:.4f}")
    print(f"Cointegrated: {is_cointegrated}")
    print(f"Annual Return: {annual_return:.2%}")
    print(f"Sharpe Ratio: {sharpe_ratio:.2f}")
    print(f"Maximum Drawdown: {max_drawdown:.2%}")
    
    # Plot results
    plt.figure(figsize=(12, 10))
    
    plt.subplot(411)
    plt.plot(data[ticker1], label=ticker1)
    plt.plot(data[ticker2], label=ticker2)
    plt.legend()
    plt.title('Stock Prices')
    
    plt.subplot(412)
    plt.plot(spread)
    plt.title('Spread (Zt = Xt - β·Yt)')
    
    plt.subplot(413)
    plt.plot(zscore)
    plt.axhline(1.5, color='r', linestyle='--')
    plt.axhline(-1.5, color='g', linestyle='--')
    plt.axhline(0, color='k', linestyle='-')
    plt.title('Z-Score of Spread with Trading Thresholds')
    
    plt.subplot(414)
    plt.plot(returns.cumsum())
    plt.title('Cumulative Returns')
    
    plt.tight_layout()
    plt.show()

# Example usage
if __name__ == "__main__":
    implement_pairs_trading("1120.SR", "1150.SR", "2020-01-01", "2023-01-01")  # Al Rajhi Bank and Alinma Bank
```
