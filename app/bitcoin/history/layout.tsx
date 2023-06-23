import { TabGroup } from '#/ui/tab-group';
import React from 'react';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-9">
      <div className="flex flex-wrap items-center gap-2">
        <TabGroup
          path="/bitcoin/history"
          items={[
            {
              text: 'All',
              slug: 'all',
            },
            {
              text: 'Lost',
              slug: 'lost',
            },
            {
              text: 'Won',
              slug: 'won',
            },
          ]}
        />

        <div className="self-start">rating here!!!</div>
      </div>

      <div>{children}</div>
    </div>
  );
}
