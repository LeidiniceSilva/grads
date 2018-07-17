
#cdo daymean SRF.T2M.nc SRF.T2M.day.nc

cdo monmean SRF.T2M.day.nc SRF.T2M.monthly.nc


mv SRF.T2M.day.nc diario

mv SRF.T2M.monthly.nc mensal

