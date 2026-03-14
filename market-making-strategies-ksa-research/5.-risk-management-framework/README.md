---
description: >-
  Our market making strategies employ a comprehensive risk management framework
  specifically calibrated for Saudi market conditions:
---

# 5. Risk Management Framework

**Risk Parameters**<br>

| Risk Type       | Monitoring Metric               | Limit Structure               | Mitigation Action                                 |
| --------------- | ------------------------------- | ----------------------------- | ------------------------------------------------- |
| Inventory Risk  | Net position as % of capital    | Soft: 5%, Hard: 10%           | Skew quotes, reduce size, hedge with derivatives  |
| Market Risk     | VaR (95%, 1-day)                | Soft: 1.5%, Hard: 3%          | Reduce position sizes, increase hedge ratio       |
| Volatility Risk | Realized vs. Implied volatility | ±30% deviation                | Widen quotes, reduce size, increase skew          |
| Liquidity Risk  | Time to liquidate position      | Max 1 trading day             | Reduce position size, adjust max inventory        |
| Technical Risk  | Latency, execution success rate | Latency < 50ms, Success > 98% | Switch to passive strategies, reduce message rate |
| Regulatory Risk | Compliance metrics              | Zero tolerance                | Pause trading, engage compliance team             |
