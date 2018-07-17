#!/bin/bash

for ANO in `seq 1981 2010`; do

    for MES in 01 02 03 04 05 06 07 08 09 10 11 12; do

      cdo -f nc import_binary ATM.${ANO}${MES}0100.ctl ATM.${ANO}${MES}0100.nc

      cdo selname,u,v,w,t,qv,qc ATM.${ANO}${MES}0100.nc ATM.${ANO}${MES}.perf1.nc 
      
      cdo intlevel,100,200,300,400,500,600,700,800,850,900,950,1000 ATM.${ANO}${MES}.perf1.nc ATM.${ANO}${MES}.perf.nc
      
      rm -rf ATM.${ANO}${MES}0100.ctl ATM.${ANO}${MES}0100 ATM.${ANO}${MES}.perf1.nc ATM.${ANO}${MES}0100.nc

     done
done 



