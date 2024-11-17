export default async (req) => {
  
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  const body = await req.json();
  const { customName = "Bob", ukus = "us" } = body;

  const xItems = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
  const yItems = ["the soup kitchen", "Disneyland", "the White House"];
  const zItems = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

  function randomValueFromArray(array) {
      const random = Math.floor(Math.random() * array.length);
      return array[random];
  }

  function convertUnits(text, ukus) {
      if (ukus === "uk") {
          return text
              .replace("94 fahrenheit", "34 celsius")
              .replace("300 pounds", "21 stone");
      }
      return text;
  }

  const xItem = randomValueFromArray(xItems);
  const yItem = randomValueFromArray(yItems);
  const zItem = randomValueFromArray(zItems);

  let story = `It was 94 fahrenheit outside, so ${xItem} went for a walk. When they got to ${yItem}, they stared in horror for a few moments, then ${zItem}. ${customName} saw the whole thing, but was not surprised — ${xItem} weighs 300 pounds, and it was a hot day.`;
  story = convertUnits(story, ukus);

  return new Response(JSON.stringify({ story }), {
      status: 200,
      headers: headers
  });
};