import ReactLoading from "react-loading"

const Loading = ({ type, color = "#00cf80", height = 400, width = 400 }) => {
  return (
    <ReactLoading type={type} color={color} height={height} width={width} />
  )
}

export default Loading
