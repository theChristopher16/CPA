#ifdef GL_ES
precision highp float;
#endif

//uniform vec2 resolution;
//uniform float angle;

varying vec4 var_vertCol;

varying lowp vec4 vColor;

//uniform sampler2D u_texture;
//uniform vec4 u_fogColor;
//uniform float u_fogAmount;

void main(void)
{
    //float u_fogAmount = (gl_FragCoord.z-0.5)/0.12;
    //vec4 color = texture2D(u_texture, v_texcoord);
    //gl_FragColor = mix(color, u_fogColor, u_fogAmount);


    //vec2 p = gl_FragCoord.xy / resolution.xy;

    //float r = sin(angle);
    //float g = p[1];
    //float b = 0.0;
    

    vec4 fog = vec4(0.5, 0.8, 0.8, 1);
    //vec4 final = vec4(r, g, b, 1);

    //gl_FragColor = mix(fog, final, gl_FragCoord.z);
    gl_FragColor = mix(vColor, fog, (gl_FragCoord.z-0.8)/0.12);
}