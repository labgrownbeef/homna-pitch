# Appendix A: Configuration Parameters

```yaml
# Market Making Configuration for Saudi Tadawul
market_making:
  passive:
    base_spread_bps: 100
    min_spread_bps: 50
    max_spread_bps: 300
    quote_size: 10000
    max_position: 1000000  # SAR
    
  inventory_based:
    max_inventory: 2000000  # SAR
    inventory_half_life: 45  # minutes
    skew_factor: 0.002
    
  aggressive:
    min_alpha_threshold: 0.02
    max_cross_spread_pct: 0.5
    signal_decay_seconds: 5
    
  statistical:
    model_update_frequency: 300  # seconds
    min_confidence: 0.7
    feature_window: 1000  # ticks

prayer_adjustments:
  dhuhr:
    spread_multiplier: 1.5
    size_reduction: 0.6
    max_position_pct: 0.5
    
  asr:
    spread_multiplier: 1.3
    size_reduction: 0.7
    max_position_pct: 0.7
    
risk_limits:
  position:
    max_single_stock: 5000000  # SAR
    max_sector: 0.4  # 40% of portfolio
    max_portfolio: 3.0  # 3x leverage
    
  market:
    max_var_95: 0.03  # 3% daily VaR
    max_drawdown: 0.05  # 5%
    
  operational:
    max_order_rate: 100  # per second
    max_message_rate: 500  # per second
    max_latency_p99: 100  # microseconds
```
