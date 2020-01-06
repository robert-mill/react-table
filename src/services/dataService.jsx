const examples = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "First Example",
    text: "Suporting data 1"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Second Example",
    text: "Suporting data 2"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Third Example",
    text: "Suporting data 3"
  }
];
export function getExamples() {
  return examples;
}
export function deleteExample(id) {
  let exampleInDb = examples.find(e => e._id === id);
  examples.splice(examples.indexOf(exampleInDb), 1);
  return exampleInDb;
}
