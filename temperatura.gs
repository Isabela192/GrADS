'reset'

'set display color white'
'c'

'set grid off'
'set line 1'
'set mpdset ../recursos/bat_sp_hires'
'set map 1 1 5'
'set line 1'
'set digsiz 10'
'set clopts 1 1 0.12'
*AREA GRAFICA*
'set parea 1 10.5 1 7.5'
'set xlopts 1 3 0.17'
'set ylopts 1 3 0.17'
'set font 0'

*Paleta de cores para temperatura
'set rgb 20   74  111  227'
'set rgb 21  116  137  225'
'set rgb 22  149  162  226'
'set rgb 23  181  187  227'
'set rgb 24  211  213  227'
'set rgb 25  229  209  212'
'set rgb 26  230  175  185'
'set rgb 27  227  141  158'
'set rgb 28  220  105  132'
'set rgb 29  211   63  106'
'set rgb 45  255    0    0'

*'set lon -47.5 -45.7'
*'set lat -24.1 -23''
rows=2
cols=3

t=60

while(t<=73)
  'set gxout shaded'
  'set t 't
  'q time'
  say result
  datahora=subwrd(result,3)%' t='%t
*  if(j>cols);i=i+1;j=1;endif
  'set grads off'
*  'set_parea.gs 'rows' 'cols' 'i' 'j' -m 0.3'
*  'set gxout shaded'
   'color -var tempc -kind rainbow'
   'd tempc2m'
 
   'set gxout vector'
   'set arrscl 0.7 10'
   'set ccolor 1'
   'd skip(u,5,5);v'
   'set line 1 1 5'
   'draw shp ../recursos/MUNICIPIOS_CHUVA.'
   'xcbar 1 7.5 .4 .6'
   'draw title Temperatura em Sup. e vento em 850 hPa \' datahora
   'set line 1 1 1'
   'printim saopaulo_veg_temp2m_wind_'t'.png' 
  t=t+1
  'q pos'
  'c'

endwhile


