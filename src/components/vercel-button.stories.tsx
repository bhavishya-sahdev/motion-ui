import type { Meta, StoryObj } from '@storybook/react-vite';
import { VercelButton } from './vercel-button';


const meta = {
  component: VercelButton,
} satisfies Meta<typeof VercelButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button",
    className: "",
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
      <div className='p-10 m-0! bg-black'>
        <h1 className='mb-4 text-3xl text-white'>Primary button</h1>
        <Story />
      </div>
    ),
  ],
};

export const Secondary: Story = {
  args: {
    children: "Button",
    className: "",
    variant: "secondary",
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
      <div className='p-10 m-0!'>
        <h1 className='mb-4 text-3xl'>Secondary button</h1>
        <Story />
      </div>
    ),
  ],
};

export const PrimarySizeSm: Story = {
  args: {
    children: "Button",
    size: "sm",
    className: "",
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
      <div className='p-10 m-0! bg-black'>
        <h1 className='mb-1 text-3xl text-white'>Primary button</h1>
        <p className='mb-4 text-sm text-white/80'>Size small</p>
        <Story />
      </div>
    ),
  ],
};

export const SecondarySizeSm: Story = {
  args: {
    children: "Button",
    size: "sm",
    variant: "secondary",
    className: "",
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
      <div className='p-10 m-0!'>
        <h1 className='mb-1 text-3xl'>Secondary button</h1>
        <p className='mb-4 text-sm text-black/60'>Size small</p>
        <Story />
      </div>
    ),
  ],
};

export const Demo: Story = {
  args: {
    children: "Deploy on vercel",
    prefix: <svg aria-label="Vercel logomark" height="14" role="img" viewBox="0 0 74 64" style={{ width: "auto", overflow: "visible" }}><path d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z" fill="var(--ds-background-200)"></path></svg>,
    className: "",
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
        className='p-10 m-0! flex gap-6 flex-col items-center max-w-[890px] relative overflow-clip'
        style={{
          background: "linear-gradient(to bottom, #000 0%, #000 40%, transparent 100%), conic-gradient(from 180deg at 50% 30%,#fafafa00 0deg,#eec32d 72deg,#ec4b4b 144deg,#709ab9 216deg,#4dffbf 288deg,#fafafa00 360deg)",
          backgroundColor: "#000"
        }}>
        <div className='space-y-4 text-center'>
          <h1 className='text-[2.75rem] text-white'>Build and deploy on the AI Cloud.</h1>
          <p className='text-[#a1a1a1] text-[1.25rem]'>Vercel provides the developer tools and cloud infrastructure<br /> to build, scale, and secure a faster, more personalized web.</p>
        </div>
        <div className='flex gap-4'>
          <Story />
          <VercelButton variant="secondary">Get a demo</VercelButton>
        </div>
      </div>
    ),
  ],
};