import type { Meta, StoryObj } from '@storybook/react-vite';

import LinearCard from './linear-card';

const meta = {
  component: LinearCard,
} satisfies Meta<typeof LinearCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Purpose-built for product development",
    image: "https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/93514696-592a-4764-aa98-b6101349a100/f=auto,dpr=2,q=95,fit=scale-down,metadata=none",
    content: <div>
      <p className='text-white/70'>
        Linear was developed with a specific purpose: to empower product teams to do their best work.
        Every aspect is intentionally designed to help teams focus on what they do best: Planning, building, and shipping great products.
      </p>
      <br />
      <p className='text-white/70'>
        Because of its fit-to-purpose design, Linear is incredibly easy to use, but grows more powerful as you scale.
        It’s principled where it needs to be, but provides enough flexibility to adapt to your team’s unique way of working.
      </p>
      <br />
      <p className='text-white/70'>
        We believe that this approach creates a better way to build products.
        And more than 20,000 product teams around the globe – from early-stage startups to public companies – agree.
      </p>
    </div>
  },
  parameters: {
    backgrounds: {
      options: {
        dark: { name: 'Dark', value: '#000' },
        light: { name: 'Light', value: '#F7F9F2' },
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        className=''
      >
        <div className='flex gap-4'>
          <Story />
        </div>
      </div>
    ),
  ],
};