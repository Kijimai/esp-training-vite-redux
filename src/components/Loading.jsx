import ReactLoading from "react-loading"

const Loading = ({ type, color = "#00cf80" }) => {
  return <ReactLoading type={type} color={color} height={400} width={400} />
}

export default Loading
