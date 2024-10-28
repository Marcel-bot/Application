'use client';

import Chat from '@/components/chat/chat';

export default function Page() {
  return (
    <main className='flex h-full grow basis-0 flex-col items-center'>
      <Chat
        messages={[
          {
            type: 'user',
            content: 'What happened in Romania in the year 1918, on December 1?'
          },
          {
            type: 'agent',
            content:
              'On December 1, 1918, Romania celebrated a significant historical event known as the Great Union (Marea Unire) On December 1, 1918, Romania celebrated a significant historical event known as the Great Union (Marea Unire)',
            analyticActions: [
              {
                type: 'terminal',
                params: ['test']
              },
              {
                type: 'web',
                params: ['test']
              }
            ],
            outputActions: [
              {
                type: 'eye',
                params: ['test']
              },
              {
                type: 'wheel',
                params: ['test']
              }
            ]
          },
          {
            type: 'user',
            content: 'What happened in Romania in the year 1918, on December 1?'
          },
          {
            type: 'agent',
            content:
              'On December 1, 1918, Romania celebrated a significant historical event known as the Great Union (Marea Unire) On December 1, 1918, Romania celebrated a significant historical event known as the Great Union (Marea Unire)',
            analyticActions: [
              {
                type: 'terminal',
                params: ['test']
              },
              {
                type: 'web',
                params: ['test']
              }
            ],
            outputActions: [
              {
                type: 'eye',
                params: ['test']
              },
              {
                type: 'wheel',
                params: ['test']
              }
            ]
          },
          {
            type: 'user',
            content: 'What happened in Romania in the year 1918, on December 1?'
          },
          {
            type: 'agent',
            content:
              'On December 1, 1918, Romania celebrated a significant historical event known as the Great Union (Marea Unire) On December 1, 1918, Romania celebrated a significant historical event known as the Great Union (Marea Unire)',
            analyticActions: [
              {
                type: 'terminal',
                params: ['test']
              },
              {
                type: 'web',
                params: ['test']
              }
            ],
            outputActions: [
              {
                type: 'eye',
                params: ['test']
              },
              {
                type: 'wheel',
                params: ['test']
              }
            ]
          },
          {
            type: 'user',
            content: 'What happened in Romania in the year 1918, on December 1?'
          },
          {
            type: 'agent',
            content:
              'On December 1, 1918, Romania celebrated a significant historical event known as the Great Union (Marea Unire) On December 1, 1918, Romania celebrated a significant historical event known as the Great Union (Marea Unire)',
            analyticActions: [
              {
                type: 'terminal',
                params: ['test']
              },
              {
                type: 'web',
                params: ['test']
              }
            ],
            outputActions: [
              {
                type: 'eye',
                params: ['test']
              },
              {
                type: 'wheel',
                params: ['test']
              }
            ]
          },
          {
            type: 'user',
            content: 'What happened in Romania in the year 1918, on December 1?'
          },
          {
            type: 'agent',
            content:
              'On December 1, 1918, Romania celebrated a significant historical event known as the Great Union (Marea Unire) On December 1, 1918, Romania celebrated a significant historical event known as the Great Union (Marea Unire)',
            analyticActions: [
              {
                type: 'terminal',
                params: ['test']
              },
              {
                type: 'web',
                params: ['test']
              }
            ],
            outputActions: [
              {
                type: 'eye',
                params: ['test']
              },
              {
                type: 'wheel',
                params: ['test']
              }
            ]
          },
          {
            type: 'user',
            content: 'What happened in Romania in the year 1918, on December 1?'
          },
          {
            type: 'agent',
            content:
              'On December 1, 1918, Romania celebrated a significant historical event known as the Great Union (Marea Unire) On December 1, 1918, Romania celebrated a significant historical event known as the Great Union (Marea Unire)',
            analyticActions: [
              {
                type: 'terminal',
                params: ['test']
              },
              {
                type: 'web',
                params: ['test']
              }
            ],
            outputActions: [
              {
                type: 'eye',
                params: ['test']
              },
              {
                type: 'wheel',
                params: ['test']
              }
            ]
          }
        ]}
      />
    </main>
  );
}
