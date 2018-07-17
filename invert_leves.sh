
for ANO in `seq 1981 2010`; do
 
 for MES in 01 02 03 04 05 06 07 08 09 10 11 12; do

   ncatted -O -a positive,lev,c,c,"down" -a units,lev,c,c,"millibar" -a long_name,lev,c,c,"Level"  ATM.${ANO}${MES}.perf.nc  ATM.${ANO}${MES}.v.perf.nc
   
   rm -rf ATM.${ANO}${MES}.perf.nc
   
   cdo remapbil,r720x360 ATM.${ANO}${MES}.v.perf.nc ATM.${ANO}${MES}.g.perf.nc 

   rm -rf ATM.${ANO}${MES}.v.perf.nc
   
   cdo sellonlatbox,-85,-15,-20,10 ATM.${ANO}${MES}.g.perf.nc ATM.${ANO}${MES}.nc 
   
   rm -rf ATM.${ANO}${MES}.g.perf.nc
 
 done

done
   
   
   
   
