#__author__      = 'Leidinice Silva'
#__email__       = 'leidinicesilva@gmail.com'
#__date__        = '11/08/18'
#__description__ = 'Plot maps of seasonal precipitation'


#RCM_EXP SIM DATA

'reinit'

EXP='exp14'
DIR_EXP='rcm13'

k.1=1
l.1=3
k.2=4
l.2=6

y=1
while(y<3)

if (y=1)
  TRIM=MAM

else
  TRIM=JJA

endif

'open /home/'DIR_EXP'/dados/output/NEB_RCM_'EXP'_pre_season_mon_2010.nc.ctl'
'define chuva=ave(pr,t='k.y',t='l.y')'
'set display color white'
'set gxout shaded'
'c'

'color 1 16 1 -kind white->grainbow'
'set cmin 2'
'set grads off'
'set xlint 5'
'set ylint 3'
'set mpdset mresbr'
'set map 1 1 6'
'set ylopts 1 4 0.15'
'set xlopts 1 4 0.15'

'd chuva'
'xcbar -line on -edge triangle'

'draw title Precip RegCM4.7_'EXP' (mm/d) - 'TRIM' 2010'
'draw xlab Longitude'                                                                           
'draw ylab Latitude'

'printim /home/'DIR_EXP'/results/NEB_RCM_'EXP'_pre_'TRIM'_mon_2010.png white'

y=y+1
endwhile

quit


#TRMM - OBS DATA

'reinit'

i.1=3
j.1=5
i.2=6
j.2=8

x=1
while(x<3)

if (x=1)
  TRIM=MAM

else
  TRIM=JJA

endif

'sdfopen /home/rcm13/dados/obs/prec_trmm_neb_mon_2010.nc'
'define chuva=ave(r,t='i.x',t='j.x')'
'set display color white'
'set gxout shaded'
'c'

'color 1 16 1 -kind white->grainbow'
'set cmin 2'
'set grads off'
'set xlint 5'
'set ylint 3'
'set mpdset mresbr'
'set map 1 1 6'
'set ylopts 1 4 0.15'
'set xlopts 1 4 0.15'

'd chuva'
'xcbar -line on -edge triangle'

'draw title Precip TRMM (mm/d) - 'TRIM' 2010'
'draw xlab Longitude'                                                                           
'draw ylab Latitude'

'printim /home/rcm13/results/prec_trmm_neb_'TRIM'_2010.png white'

x=x+1
endwhile



