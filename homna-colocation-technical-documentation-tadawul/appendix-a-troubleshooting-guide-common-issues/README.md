# Appendix A: Troubleshooting Guide (Common Issues)

| Issue           | Symptoms            | Resolution                               |
| --------------- | ------------------- | ---------------------------------------- |
| High Latency    | P99 > 100μs         | Check CPU affinity, disable power saving |
| Packet Loss     | Gaps in sequence    | Increase buffer sizes, check network     |
| Order Rejects   | High rejection rate | Verify risk limits, check connectivity   |
| Memory Pressure | OOM errors          | Tune allocation, check for leaks         |
