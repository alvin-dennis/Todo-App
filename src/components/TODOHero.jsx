function TODOHero({ todos_completed, total_todos }) {
  return (
    <section className="todohero_section">
      <div>
        <p className="text_large">Task Completed </p>
        <p className="text_small">Well Done!!</p>
      </div>
      <div>
        {todos_completed}/{total_todos}
      </div>
    </section>
  );
}

export default TODOHero;
