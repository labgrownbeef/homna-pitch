# 4 Software Architecture:

**Ubuntu LTS with PREEMPT\_RT**

```bash
# Kernel Configuration
CONFIG_PREEMPT_RT=y
CONFIG_HZ_1000=y
CONFIG_NO_HZ_FULL=y
CONFIG_RCU_NOCB_CPU=y
CONFIG_RCU_BOOST=y
CONFIG_IRQ_FORCED_THREADING=y

# Boot Parameters
GRUB_CMDLINE_LINUX="isolcpus=2-31 nohz_full=2-31 rcu_nocbs=2-31 
                     intel_pstate=disable processor.max_cstate=1 
                     idle=poll transparent_hugepage=never"
```

**System Tuning**

```bash
#!/bin/bash
# /etc/homna/system-tuning.sh

# CPU Performance
for cpu in /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor; do
    echo performance > $cpu
done

# Disable CPU frequency scaling
systemctl disable ondemand

# Memory settings
echo never > /sys/kernel/mm/transparent_hugepage/enabled
echo 0 > /proc/sys/kernel/numa_balancing

# Network optimization
echo 2 > /proc/sys/net/ipv4/tcp_low_latency
echo 50 > /proc/sys/net/core/busy_read
echo 50 > /proc/sys/net/core/busy_poll
echo 512 > /proc/sys/net/core/netdev_max_backlog

# IRQ Affinity
# Bind network interrupts to CPU 0-1
./set_irq_affinity.sh eth0 0-1
```

####
