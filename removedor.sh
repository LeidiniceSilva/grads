for ANO in `seq 1981 2010`; do

# for MES in $(seq -f %02g 1 12);do

 for MES in 01 02 03 04 05 06 07 08 09 10 11 12; do
 
 rm -rf  ATM.${ANO}${MES}.perf.nc  
 
 done
 
done

