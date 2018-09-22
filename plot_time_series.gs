#__author__      = 'Leidinice Silva'
#__email__       = 'leidinicesilva@gmail.br'
#__date__        = '07/04/18'
#__description__ = 'Plot time series and statistics metrics'
 
'reinit'

*'open /vol3/nice/output1/pre_amz_neb_regcm_exp1_2001-2005.nc.ctl'
'sdfopen /vol3/nice/obs/pre_mon_cmap_observation_2001-2005.nc'

'set display color white'
'c'

'set x 50'
'set y 50'

'set t 1 last'

lon1 = -55
lon2 = -54
lat1 = -11
lat2 = -8

*'define a1 = aave(pr,lon='lon1',lon='lon2',lat='lat1',lat='lat2')'
'define a2 = aave(precip,lon='lon1',lon='lon2',lat='lat1',lat='lat2')'

*'set parea 1 10 5 8'
*'set cmark 0'
*'set vrange 0 80'
*'d a1'


'set ccolor 2'
'set cmark 0'
'set vrange 0 80'
'd a2'

