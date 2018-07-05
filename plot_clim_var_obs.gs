#__author__      = 'Leidinice Silva'
#__email__       = 'leidinicesilva@gmail.br'
#__date__        = '07/04/18'
#__description__ = 'Extract time series of the area of study'


'reinit'
*********************************************
MES = "dec"
*********************************************
'sdfopen /vol3/nice/obs/pre_amz_neb_cmap_observation_2001-2005_A0_clim.nc'
'set display color white'
'set gxout shaded'
'c'
'color.gs -gxout shaded -kind white->green->blue->yellow->gold->red 0 100'
'set clevs 0 2 4 6 10 15 20 30 40 50 60 80 100 120'
'set ccols 16 9 14 4 11 5 13 3 10 7 12 8 2 6'
'set cmin 0'
'set grads off'
'set mpdset brmap_hires'
'set t 12'
'd precip'
'cbarn'
'draw title Rainfall climatology - CMAP_OBS - 'MES'/2001_2005 (mm)'
'draw xlab Longitude'
'draw ylab Latitude'
'printim /vol3/nice/results/obs/pre_amz_neb_cmap_obs_'MES'_2001_2005_clim.jpeg jpeg white'


'reinit'
*********************************************
MES = "dec"
*********************************************
'sdfopen /vol3/nice/obs/t2m_amz_neb_ncep_ncar_reanalysis_2001-2005_A0_clim.nc'
'set display color white'
'set gxout shaded'
'c'
'color.gs -gxout shaded -kind white->green->blue->yellow->gold->red -10 30 2'
'set cmin 0'
'set grads off'
'set mpdset brmap_hires'
'set t 12'
'd air'
'cbarn'
'draw title Temperature climatology - NCEP/NCAR - 'MES'/2001_2005 (`3.`1C)'
'draw xlab Longitude'
'draw ylab Latitude'
'printim /vol3/nice/results/obs/t2m_amz_neb_ncep_ncar_rea_'MES'_2001_2005_clim.jpeg jpeg white'




