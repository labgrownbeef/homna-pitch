# 4. Trading Strategy Implementation: Signal Generation

#### &#x20;Signal Generation

Based on the spread Z<sub>t</sub>:

**Entry Signals:**

* GO LONG the spread when Z<sub>t</sub> < μ - k·σ (spread is below k standard deviations)
* GO SHORT the spread when Z<sub>t</sub> > μ + k·σ (spread is above k standard deviations)
* Recommended k values for Saudi market: 1.5-2.0 (tighter than typical 2.0-2.5 in developed markets)

**Exit Signals:**

* EXIT LONG position when Z<sub>t</sub> > μ
* EXIT SHORT position when Z<sub>t</sub> < μ
* Optional: Add trailing stops at 1.5x average daily spread movement

<br>
