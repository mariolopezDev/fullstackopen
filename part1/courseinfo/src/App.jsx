const Header = ({ course }) => {
  return <h1>{course}</h1>
}

const Part = ({ parts, x }) => {
  return (
    <p>
      {parts[x].name} {parts[x].exercises}
    </p>
  )
}

const Content = ({ parts }) => {
  return (
    <>
      <Part parts={parts} x={0} />
      <Part parts={parts} x={1} />
      <Part parts={parts} x={2} />
    </>
  )
}
const Total = ({ parts }) => {
  return (
    <p>
      Number of exercises{' '}
      {parts[0].exercises + parts[1].exercises + parts[2].exercises}
    </p>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App
