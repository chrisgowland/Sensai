# Raw Data Extraction Priority (UK Market Share)

## Objective
Prioritise sources that provide machine-readable, high-granularity market-share data by:
- entity (firm/provider/platform),
- geography (region/local/station/site),
- time period (monthly/quarterly preferred).

## Tier 1 (ingest first)
1. PHIN private healthcare datasets  
2. FCA mortgage PSD geography files  
3. Ofgem retail market indicators  
4. Ofcom Connected Nations + Online Nation datasets  
5. CAA airport/airline datasets  
6. ORR passenger rail + station usage datasets  
7. ONS retail internet share time series (J4MC)  
8. Statcounter UK platform share series

## Tier 2 (augment)
1. Kantar grocery market share (public layer + licensed depth)
2. BARB and RAJAR public releases (licensed detail where needed)
3. BoE and FCA aggregate product datasets for denominator and product split context
4. SMMT monthly registration/production series

## Data model (minimum)
- `source_name`
- `market`
- `submarket`
- `entity_name`
- `entity_type`
- `geo_code`
- `geo_name`
- `period_start`
- `period_end`
- `metric_name`
- `metric_value`
- `share_value`
- `denominator_value`
- `release_date`
- `source_url`

## Pipeline pattern
1. Pull raw files (CSV/XLSX/API JSON)
2. Normalise columns and time/geo keys
3. Compute shares where only numerator is supplied
4. Version data by release date
5. Run QA checks:
   - totals add to expected range
   - entity continuity over time
   - geography key validity

## Where to start in this repo
- Register of sources: `/docs/publish/uk-market-share-raw-data-register.csv`
- Broader landscape review: `/docs/publish/uk-market-share-data-atlas.md`

