#__author__      = 'Leidinice Silva'
#__email__       = 'leidinicesilva@gmail.com'
#__date__        = '08/24/2020'
#__description__ = 'Plot study area (NEB)'


'reinit'
'set display color white'
'set gxout shaded'
'c'
'sdfopen /home/nice/Documents/jessica/era5/anom_month12.nc'

'set t 37'
'set mpdset mresbr'
'set grads off'
'set grid on'
'set xlab on'
'set ylab on'
'set ylint 10'
'set xlint 10'

'colormap -l -100 100 20 -map brn2grn'
'd mtpr'
'cbar'
'draw title A) Montlhy Precipitation Anomaly Dec/2015 (mm)'

'printim /home/nice/Documents/jessica/era5/map_tp_anom.png png white'
