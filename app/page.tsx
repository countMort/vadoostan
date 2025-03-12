import { Button, Checkbox } from '@mantine/core';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Button>
        <Link href='/signup'>login</Link>
      </Button>
      <Checkbox defaultChecked label='I agree to sell my privacy' />
    </div>
  );
}
