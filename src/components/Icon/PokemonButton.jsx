const PokemonButton = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={336}
    height={336}
    fill="none"
    {...props}
  >
    <mask id="a" fill="#fff">
      <path d="M77.997 168a89.995 89.995 0 0 1 55.559-83.149 89.997 89.997 0 0 1 117.59 48.708A89.995 89.995 0 0 1 257.997 168h-180Z" />
    </mask>
    <path
      fill="#fff"
      stroke="#151515"
      strokeWidth={16}
      d="M77.997 168a89.995 89.995 0 0 1 55.559-83.149 89.997 89.997 0 0 1 117.59 48.708A89.995 89.995 0 0 1 257.997 168h-180Z"
      mask="url(#a)"
    />
    <mask id="b" fill="#fff">
      <path d="M78 168a90.005 90.005 0 0 0 26.36 63.64 89.995 89.995 0 0 0 127.279 0 90.004 90.004 0 0 0 26.36-63.64h-180Z" />
    </mask>
    <path
      fill="#E11B1D"
      stroke="#151515"
      strokeWidth={16}
      d="M78 168a90.005 90.005 0 0 0 26.36 63.64 89.995 89.995 0 0 0 127.279 0 90.004 90.004 0 0 0 26.36-63.64h-180Z"
      mask="url(#b)"
    />
    <circle
      cx={167.997}
      cy={168}
      r={26}
      fill="#DADADA"
      stroke="#151515"
      strokeWidth={8}
      transform="rotate(180 167.997 168)"
    />
  </svg>
);
export default PokemonButton;
