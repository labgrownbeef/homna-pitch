# 5. Usage Examples

Initializing the System

```python
from quantummind import QuantumMind

# Initialize the system
qm = QuantumMind(config_path="config/config.toml")

# Connect to data sources
qm.connect_data_sources()

# Initialize memory with historical data
qm.initialize_memory("AAPL", start_date="2022-01-01", end_date="2023-01-01")
```



