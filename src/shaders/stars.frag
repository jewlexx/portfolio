#version 100

precision highp float;

uniform float time;
uniform vec2 resolution;

float rand(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

void main() {
  float size = 100.0;
  float prob = 0.9;
  vec2 pos = floor(1.0 / size * gl_FragCoord.xy);
  float color = 0.0;
  float starValue = rand(pos);

  vec2 uv = gl_FragCoord.xy / resolution.xy;

  if (starValue > prob) {
    vec2 center = size * pos + vec2(size, size) * 0.5;
    float t =
        0.9 + 0.2 * sin(time * 8.0 + (starValue - prob) / (1.0 - prob) * 45.0);
    color = 1.0 - distance(gl_FragCoord.xy, center) / (0.5 * size);
    color = color * t / (abs(gl_FragCoord.y - center.y)) * t /
            (abs(gl_FragCoord.x - center.x));
  } else if (rand(uv / 20.0) > 0.996) {
    float r = rand(uv);
    color = r * (0.85 * sin(time * (r * 5.0) + 720.0 * r) + 0.95);
  }

  gl_FragColor = vec4(vec3(color), 1.0) + vec4(0.0, 0.0, 0.0, 0.0);
}
