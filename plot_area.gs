'reinit'

nn = 1981

while(nn<=2010)


'sdfopen SRF.'nn'.nc'


'set display color white'
'c'
'set xlint 5'
'set ylint 5'

'set lat -20 10'
'set lon -80 -20'
'set parea 1 5 5 8'
'set gxout shaded'
'set mpdset brmap_hires'
'set clevs 0.1 0.5 1 1.5 2 2.5 3 4 5 6 7 8 9 10 12 14 16 18 20'
'd ave(tpr,time=00z01jan'nn',time=00z01jul'nn')'

'set parea 6 10 5 8'
'set gxout shaded'
'set clevs 0.1 0.5 1 1.5 2 2.5 3 4 5 6 7 8 9 10 12 14 16 18 20'
'd ave(tpr,time=00z01AUG'nn',time=00z31DEC'nn')'

'set parea 1 10 1 4.5'
'set lat 0'
'set lon -40'

'set t 1 last'

lon1 = -60
lon2 = -25
lat1 = -15
lat2 =  5

'define a1 = aave(TPR,lon='lon1',lon='lon2',lat='lat1',lat='lat2')'
'set cmark 0'
'set vrange 0 20'
'set ccolor 2'

*'set time 01jan1982 31dec2010'

'd a1'

'draw title precipitation_'nn''

'printim 'nn'_tpr.gif'
'q pos'

'close 1'

nn = nn + 1
*'q pos'

endwhile




