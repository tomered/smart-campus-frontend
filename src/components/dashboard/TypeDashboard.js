export const TypeDashboard = ({ type }) => {
  // results = API[type].get()

  // return <>Table with data<>

  return <>
    <div>
      <h2>Dashboard Classification</h2>
      <p>
        {type ? (
          `Classification Dashboard: ${type}`
        ) : (
          `Classification Unknown`
        )
        }
      </p>
    </div>
  </>
}