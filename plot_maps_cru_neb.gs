#__author__      = 'Leidinice Silva'
#__email__       = 'leidinicesilva@gmail.com'
#__date__        = '08/24/2020'
#__description__ = 'Plot study area (NEB)'


'reinit'
'set display color white'
'c'

'sdfopen /home/nice/Documents/daniele/pre_cru_ts4.04_neb_anom_2012-2016.nc'
'set lon -48 -34'
'set lat -18 0'
'set mpdset mresbr'
'set mproj scaled'
'set map 1 1 8'
'set vpage 0 11 0 8.5'
'set parea 1 4 5 8'
'set strsiz 0.20'
'set string 1 l 8'
'set grads off'
'set grid on'
'set gxout shaded'
'set xlab on'
'set ylab on'
'set xlopts 1 4 0.20'
'set ylopts 1 4 0.20'
'set ylint 5'
'set xlint 5'

'colormap -l -50 50 10 -map oj2p'
'd pre'
'xcbar 4.5 4.7 5 8'
'draw title A) PREC (mm/m)'
'close 1'
********

'sdfopen /home/nice/Documents/daniele/pet_cru_ts4.04_neb_anom_2012-2016.nc'
'set lon -48 -34'
'set lat -18 0'
'set vpage 0 11 0 8.5'
'set parea 6 9 5 8'
'set strsiz 0.20'
'set string 1 l 8'
'set grads off'
'set grid on'
'set gxout shaded'
'set xlab on'
'set ylab on'
'set xlopts 1 4 0.20'
'set ylopts 1 4 0.20'
'set ylint 5'
'set xlint 5'

'colormap -l -0.097500 0.097500 0.02 -map brn2grn'
'd pet'
'xcbar 9.5 9.7 5 8'
'draw title B) ETP (mm/d)'
'close 1'
**************

'sdfopen /home/nice/Documents/daniele/tmx_cru_ts4.04_neb_anom_2012-2016.nc'
'set lon -48 -34'
'set lat -18 0'
'set vpage 0 11 0 8.5'
'set parea 1 4 1 4'
'set strsiz 0.20'
'set string 1 l 8'
'set grads off'
'set grid on'
'set gxout shaded'
'set xlab on'
'set ylab on'
'set xlopts 1 4 0.20'
'set ylopts 1 4 0.20'
'set ylint 5'
'set xlint 5'

'colormap -l -0.8 0.8 0.1 -map b2r'
'd tmx'
'xcbar 4.5 4.7 1 4'
'draw title C) T.Max. (Celsius)'
'close 1'
**************

'sdfopen /home/nice/Documents/daniele/tmn_cru_ts4.04_neb_anom_2012-2016.nc'
'set lon -48 -34'
'set lat -18 0'
'set vpage 0 11 0 8.5'
'set parea 6 9 1 4'
'set strsiz 0.20'
'set string 1 l 8'
'set grads off'
'set grid on'
'set gxout shaded'
'set xlab on'
'set ylab on'
'set xlopts 1 4 0.20'
'set ylopts 1 4 0.20'
'set ylint 5'
'set xlint 5'

'colormap -l -0.8 0.8 0.1 -map b2r'
'd tmn'
'xcbar 9.5 9.7 1 4'
'draw title D) T.Min. (Celsius)'

'printim /home/nice/Documents/daniele/maps_anom_neb.png white'
break

'reinit'
'set display color white'
'c'

'sdfopen /home/nice/vhi_sam_yearmean_2012-2016.nc'
'set lon -48 -34'
'set lat -18 0'
'set mpdset mresbr'
'set mproj scaled'
'set map 1 1 8'
'set t 1'
'set vpage 0 11 0 8.5'
'set parea 1 3 6 8'
'set strsiz 0.20'
'set string 1 l 8'
'set grads off'
'set grid on'
'set gxout shaded'
'set xlab on'
'set ylab on'
'set xlopts 1 3 0.20'
'set ylopts 1 3 0.20'
'set ylint 5'
'set xlint 5'

'colormap  -flipped -l 0 100 10 -map Terrain1'
'd vhi'
'draw title A) VHI 2012'
'close 1'

'sdfopen /home/nice/vhi_sam_yearmean_2012-2016.nc'
'set lon -48 -34'
'set lat -18 0'
'set vpage 0 11 0 8.5'
'set parea 4 6 6 8'
'set strsiz 0.20'
'set string 1 l 8'
'set t 2'
'set grads off'
'set grid on'
'set gxout shaded'
'set xlab on'
'set ylab on'
'set xlopts 1 4 0.20'
'set ylopts 1 4 0.20'
'set ylint 5'
'set xlint 5'

'colormap  -flipped -l 0 100 10 -map Terrain1'
'd vhi'
'draw title B) VHI (2013)'
'close 1'

'sdfopen /home/nice/vhi_sam_yearmean_2012-2016.nc'
'set lon -48 -34'
'set lat -18 0'
'set vpage 0 11 0 8.5'
'set parea 7 9 6 8'
'set strsiz 0.20'
'set string 1 l 8'
'set t 3'
'set grads off'
'set grid on'
'set gxout shaded'
'set xlab on'
'set ylab on'
'set xlopts 1 4 0.20'
'set ylopts 1 4 0.20'
'set ylint 5'
'set xlint 5'

'colormap  -flipped -l 0 100 10 -map Terrain1'
'd vhi'
'xcbar 9.3 9.5 5.6 8'
'draw title C) VHI 2014'
'close 1'

'sdfopen /home/nice/vhi_sam_yearmean_2012-2016.nc'
'set lon -48 -34'
'set lat -18 0'
'set vpage 0 11 0 8.5'
'set parea 1 3 2 4'
'set strsiz 0.20'
'set string 1 l 8'
'set t 4'
'set grads off'
'set grid on'
'set gxout shaded'
'set xlab on'
'set ylab on'
'set xlopts 1 4 0.20'
'set ylopts 1 4 0.20'
'set ylint 5'
'set xlint 5'

'colormap  -flipped -l 0 100 10 -map Terrain1'
'd vhi'
'draw title D) VHI 2015'

'sdfopen /home/nice/vhi_sam_yearmean_2012-2016.nc'
'set lon -48 -34'
'set lat -18 0'
'set vpage 0 11 0 8.5'
'set parea 4 6 2 4'
'set strsiz 0.20'
'set string 1 l 8'
'set t 5'
'set grads off'
'set grid on'
'set gxout shaded'
'set xlab on'
'set ylab on'
'set xlopts 1 4 0.20'
'set ylopts 1 4 0.20'
'set ylint 5'
'set xlint 5'

'colormap  -flipped -l 0 100 10 -map Terrain1'
'd vhi'
'xcbar 6.5 6.7 1.6 4'
'draw title E) VHI 2016'

'printim /home/nice/Documents/maps_vhi_neb.png white'
break

'reinit'
'set display color white'
'c'

'sdfopen /home/nice/Downloads/cru_ts4.05_pre_clim_1981-2010.nc'
'set lon -48 -34'
'set lat -18 0'
'set mpdset mresbr'
'set mproj scaled'
'set map 1 1 8'
'set vpage 0 11 0 8.5'
'set parea 1 4 5 8'
'set strsiz 0.20'
'set string 1 l 8'
'set grads off'
'set grid on'
'set gxout shaded'
'set xlab on'
'set ylab on'
'set xlopts 1 4 0.20'
'set ylopts 1 4 0.20'
'set ylint 5'
'set xlint 5'

'colormap -flipped -l 200 2000 200 -map grayscale'
'd pre'
'xcbar 4.5 4.7 5 8'
'draw title A) PRE (mm)'
'close 1'
********

'sdfopen /home/nice/Downloads/cru_ts4.05_pet_clim_1981-2010.nc'
'set lon -48 -34'
'set lat -18 0'
'set vpage 0 11 0 8.5'
'set parea 6 9 5 8'
'set strsiz 0.20'
'set string 1 l 8'
'set grads off'
'set grid on'
'set gxout shaded'
'set xlab on'
'set ylab on'
'set xlopts 1 4 0.20'
'set ylopts 1 4 0.20'
'set ylint 5'
'set xlint 5'

'colormap -flipped -l 3.0 4.8 0.2 -map grayscale'
'd pet'
'xcbar 9.5 9.7 5 8'
'draw title B) ETP (mm/d)'
'close 1'
**************

'sdfopen /home/nice/Downloads/cru_ts4.05_tmx_clim_1981-2010.nc'
'set lon -48 -34'
'set lat -18 0'
'set vpage 0 11 0 8.5'
'set parea 1 4 1 4'
'set strsiz 0.20'
'set string 1 l 8'
'set grads off'
'set grid on'
'set gxout shaded'
'set xlab on'
'set ylab on'
'set xlopts 1 4 0.20'
'set ylopts 1 4 0.20'
'set ylint 5'
'set xlint 5'

'colormap -flipped -l 28 34 0.5 -map grayscale'
'd tmx'
'xcbar 4.5 4.7 1 4'
'draw title C) Tmax (Celsius)'
'close 1'
**************

'sdfopen /home/nice/Downloads/cru_ts4.05_tmn_clim_1981-2010.nc'
'set lon -48 -34'
'set lat -18 0'
'set vpage 0 11 0 8.5'
'set parea 6 9 1 4'
'set strsiz 0.20'
'set string 1 l 8'
'set grads off'
'set grid on'
'set gxout shaded'
'set xlab on'
'set ylab on'
'set xlopts 1 4 0.20'
'set ylopts 1 4 0.20'
'set ylint 5'
'set xlint 5'

'colormap -flipped -l 18 24 0.5 -map grayscale'
'd tmn'
'xcbar 9.5 9.7 1 4'
'draw title D) Tmin (Celsius)'

'printim /home/nice/Downloads/maps_clim_neb.png white'

'reinit'
'set display color white'
'set gxout shaded'
'c'
'open /home/nice/Documents/daniele/neb_DOMAIN000.nc.ctl'

'set vpage 2 9 0 8.5'
'set mpdset mresbr'
'set lon -48 -34'
'set lat -18 0'
'set map 1 1 8'
'set grid on'
'set xlopts 1 5 .2'
'set xlint 3'
'set ylopts 1 5 .2'
'set ylint 3'
'set grads off'

'colormap -map ncl_topo -levels 0 1500 100'
'd topo'

'draw string 3.8 6 CE'
'drawbox -41.5 -37.5 -7.5 -2.8'
'cbarm'
'set font 5'
'set ccolor 1'

'printim /home/nice/Documents/daniele/topo_neb.png png white'
break

'reinit'
'set display color white'
'set gxout shaded'
'c'
'sdfopen /home/nice/Documents/daniele/cru_ts4.04_clim_1981-2010.nc'

'set mpdset hires'
'set lat -90 90'
'set lon -180 180'
'set mproj robinson'
'set grads off'
'set grid on'
'set xlopts 1 5 .2'
'set xlint 3'
'set ylopts 1 5 .2'
'set ylint 3'

'color 0 7000 500 -kind white->darkblue->gray'
'd pre'
'cbarm'

'printim /home/nice/Documents/daniele/clim_globo.png png white'
break


