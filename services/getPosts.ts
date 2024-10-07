export async function getData() {
  const response = await fetch('api/posts', {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) throw new Error('Unable to fetch posts!');

  return response.json();
}
