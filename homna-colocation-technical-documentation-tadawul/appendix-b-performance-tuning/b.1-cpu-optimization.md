# B.1 CPU Optimization

```bash
# Set CPU frequency governor
for cpu in /sys/devices/system/cpu/cpu[2-9]*/cpufreq/scaling_governor; do
    echo performance > $cpu
done

# Disable Intel Turbo Boost for consistency
echo 1 > /sys/devices/system/cpu/intel_pstate/no_turbo

# Set CPU affinity for critical processes
taskset -c 2-9 ./trading_engine
```

#### B.2 Memory Optimization

```cpp
// Huge pages configuration
void setup_huge_pages() {
    // Allocate huge pages
    void* huge_pages = mmap(nullptr, 
                          HUGE_PAGE_SIZE * NUM_PAGES,
                          PROT_READ | PROT_WRITE,
                          MAP_PRIVATE | MAP_ANONYMOUS | MAP_HUGETLB,
                          -1, 0);
    
    if (huge_pages == MAP_FAILED) {
        throw std::runtime_error("Failed to allocate huge pages");
    }
    
    // Lock pages in memory
    if (mlock(huge_pages, HUGE_PAGE_SIZE * NUM_PAGES) != 0) {
        throw std::runtime_error("Failed to lock pages");
    }
}
```

***
