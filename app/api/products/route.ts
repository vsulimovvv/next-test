import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const response = await fetch(
      'https://api-stage.dobropizza.ru/api/v1/cities/1'
    );
    const data = await response.json();

    return NextResponse.json(data.data.cproducts);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { error: 'Error fetching products' },
      { status: 500 }
    );
  }
}
