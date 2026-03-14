# 3 Hardware Specifications: Production Trading Servers

**Server Configuration (3x machines)**

```yaml
CPU:
  model: "Intel Xeon Platinum 8380 (Ice Lake)"
  cores: 32
  frequency: "3.4 GHz base, 3.9 GHz turbo"
  features:
    - AVX-512
    - TSX (Transactional Synchronization Extensions)
    - Hardware prefetching

Memory:
  capacity: "128GB DDR4-3200 ECC"
  configuration: "8x16GB, quad-channel"
  latency_optimization: "1T command rate"

Storage:
  os_drive: "2x 1TB NVMe SSD (RAID 1)"
  data_drive: "4x 2TB NVMe SSD (RAID 10)"
  write_cache: "Battery-backed"

Network:
  primary: "Mellanox ConnectX-6 Dx 25GbE"
  features:
    - Hardware timestamping
    - RDMA over Converged Ethernet (RoCE)
    - Kernel bypass support
  secondary: "Intel X710 10GbE (backup)"

PCIe_Slots:
  slot1: "Network adapter (x16)"
  slot2: "FPGA accelerator (x16)"
  slot3: "NVMe storage (x4)"
```
