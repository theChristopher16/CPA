#ifdef GL_ES
precision highp float;
#endif

uniform vec2 resolution;
uniform float angle;

void main(void)
{
    vec2 p = gl_FragCoord.xy / resolution.xy;

    float r = sin(angle);
    float g = p[1];
    float b = 0.0;
    

    vec4 fog = vec4(0.3, 0.3, 0.3, 1);
    vec4 final = vec4(r, g, b, 1);

    //gl_FragColor = mix(fog, final, gl_FragCoord.z);
    gl_FragColor = mix(final, fog, (gl_FragCoord.z-0.8)/0.1);
    //gl_FragColor=vec4(vec3(r, p),1.0);
    //gl_FragColor = vec4( , 0.0, 0.0, 1.0);
}