# 3.1 Algorithm Design



```python
class PassiveMarketMaker:
    def __init__(self, config):
        self.max_inventory = config['max_inventory']
        self.target_spread = config['target_spread']
        self.quote_size = config['quote_size']
        self.skew_factor = config['skew_factor']
        self.current_inventory = 0
        
    def calculate_quotes(self, market_data):
        """Calculate bid and ask quotes based on market conditions and inventory."""
        mid_price = (market_data.best_bid + market_data.best_ask) / 2
        inventory_skew = self.current_inventory / self.max_inventory * self.skew_factor
        
        # Adjust spreads based on volatility
        volatility_factor = min(3.0, max(1.0, market_data.recent_volatility / market_data.avg_volatility))
        effective_spread = self.target_spread * volatility_factor
        
        # Calculate skewed quotes to manage inventory
        bid_price = mid_price - (effective_spread / 2) * (1 + inventory_skew)
        ask_price = mid_price + (effective_spread / 2) * (1 - inventory_skew)
        
        # Adjust quote sizes based on inventory position
        bid_size = self.quote_size * (1 - abs(min(0, self.current_inventory) / self.max_inventory))
        ask_size = self.quote_size * (1 - abs(max(0, self.current_inventory) / self.max_inventory))
        
        return {
            'bid_price': bid_price,
            'bid_size': bid_size,
            'ask_price': ask_price,
            'ask_size': ask_size
        }
```
