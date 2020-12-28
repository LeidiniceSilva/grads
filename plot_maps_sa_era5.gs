#__author__      = 'Leidinice Silva'
#__email__       = 'leidinicesilva@gmail.com'
#__date__        = '08/24/2020'
#__description__ = 'Plot study area (NEB)'


'reinit'
'set display color white'
'set gxout shaded'
'c'
'sdfopen /home/nice/Downloads/anom_month02.nc'

'set t 36'
'set mpdset mresbr'
'set grads off'
'set grid on'
'set xlab on'
'set ylab on'
'set ylint 10'
'set xlint 10'

'colormap -l -300 300 100 -map brn2grn'
'd mtpr'
'cbar'
'draw title A) Precipitation Anomaly Dec/2015 (mm/m)'

'printim /home/nice/Downloads/map_tp_anom.png png white'
