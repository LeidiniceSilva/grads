'reinit'

'sdfopen SRF.TPR.nc'
'sdfopen SRF.T2M.nc'

'set display color white'
'c'
*'set xlint 5'
*'set ylint 5'

'set x 50'
'set y 50'

lon1 = -55
lon2 = -54
lat1 = -11
lat2 = -10


'set t 1 last'


'define a1 = aave(tpr.1,lon='lon1',lon='lon2',lat='lat1',lat='lat2')'
'define a2 = aave(t2m.2,lon='lon1',lon='lon2',lat='lat1',lat='lat2')-273.15'

'set t 1 last'

'set parea 1 10 5 8'
'set cmark 0'
'set vrange 0 80'
'd a1'


'set parea 1 10 1 4'
'set ccolor 2'
'set cmark 0'
'set vrange 16 44'
'd a2'


