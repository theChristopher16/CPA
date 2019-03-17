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


    
    gl_FragColor=vec4(vec3(r, p),1.0);
}