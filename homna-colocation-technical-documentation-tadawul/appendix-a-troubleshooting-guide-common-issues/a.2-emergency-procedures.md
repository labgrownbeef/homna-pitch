# A.2 Emergency Procedures

```bash
#!/bin/bash
# Emergency shutdown procedure

# 1. Cancel all open orders
./cancel_all_orders.sh

# 2. Flatten all positions
./flatten_positions.sh

# 3. Disable trading
systemctl stop homna-trading

# 4. Notify operations team
./send_alert.sh "Emergency shutdown initiated"
```

***
