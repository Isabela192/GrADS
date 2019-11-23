'reset'

'set display color white'
'c'


'set line 1'
'set digsiz 10'
'set clopts 1 1 0.12'
*AREA GRAFICA*
'set parea 1 10.5 1 7.5'
'set xlopts 1 3 0.17'
'set ylopts 1 3 0.17'
'set font 0'


'd u'
'draw shp ../recursos/MUNICIPIOS_CHUVA.shp'
'q pos'
say result
xx=subwrd(result,3)
yy=subwrd(result,4)

'q xy2w 'xx' 'yy''
say result

llat=subwrd(result,6)
llon=subwrd(result,3)
'c'

t = 60
while(t<=71)
   'set grads off'
   'set grid off'
   'set t 't
   'q time'
   say result
   datahora=subwrd(result,3)

   'set lat 'llat''
   'set lev 1000 100'
   'set zlog on'
   'color -10 10 2 -kind blue->white->red' 
   'd 10*w'
   'xcbar 1 8 .3 .5'
   'set gxout vector'
   'd skip(u,2,2);v'
   'set strsiz 0.2'
   'draw string 10 .45 m/s * 100'
   'draw string 0.3 7.8 hPa'
   'set annot 1 4'
   'draw title Velocidade Vertical (ms`a-1`n) ' datahora ' lat='llat
   'printim saopaulo_perfil_w_'t'_URB.png'

***************************************************************************   
   'q pos'
   'c'
   'set grads off'
   'define chuva=liquid+rain'
   'define gelo=hail+graupel'
   'misc=snow+pristine+aggregates'
   'set gxout shaded'
   'set clevs 0.5 1 1.5 2 2.5 3 3.5 4 4.5 5'
   'set ccols 0 9 14 4 11 5 13 3 10 7 12 8 2'
   'd chuva'
   'xcbar 1 10 .3 .5'
   'set gxout contour'
   'set ccolor 1'
   'd cloud'
   'set ccolor 2'
   'd misc'
   'set ccolor 3'
*   'd gelo'
   'draw title Hidrometeroros (gkg`a-1`n)' datahora ' lat='llat
   'printim saopaulo_hidro_'t'_URB.png' 
***************************************************************************
   'q pos'
   'c'
  
t = t+1
endwhile

'q pos'
'set lat -23.329 -22.456'
t = 60
while(t<=70)
   'set grads off'
   'set grid off'
   'set t 't
   'q time'
   say result
   datahora=subwrd(result,3)

   'set lon 'llon''
   'set lev 1000 100'
   'set zlog on'
   'color -10 10 2 -kind blue->white->red' 
   'd 10*w'
   'xcbar 1 8 .3 .5'
   'set strsiz 0.2'
   'set gxout vector'
   'd skip(u,2,2);v'
   'set strsiz 0.2'
   'draw string 10.3 .45 m/s * 100'
   'draw string 0.3 7.8 hPa' 
   'set annot 1 4'
   'draw title Velocidade Vertical ' datahora ' lon='llon
*   'printim saopaulo_perfil_w_'t'_URB.png'
   
   'q pos'
   'c'
   'set grads off'
   'define chuva=liquid+rain'
   'define gelo=hail+graupel'
   'misc=snow+pristine+aggregates'
   'set gxout shaded'
   'set clevs 0.5 1 1.5 2 2.5 3 3.5 4 4.5 5'
   'set ccols 0 9 14 4 11 5 13 3 10 7 12 8 2'
   'd chuva'
   'xcbar 1 10 .3 .6'
   'set gxout contour'
   'set ccolor 1'
   'd cloud'
   'set ccolor 2'
   'd misc'
   'set ccolor 3'
*   'd gelo'
   'draw title Hidrometeroros (gkg`a-1`n)' datahora ' lon='llon
*   'printim saopaulo_hidro_'t'_URB.png'
   'q pos'
   'c'
t = t+1
endwhile


'run vertical.gs'
