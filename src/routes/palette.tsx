import { useState } from 'react';

import { createFileRoute } from '@tanstack/react-router';

import { useTheme } from '@/hooks/use-theme';
import colors, { type HueName, type Scale, hueNames } from '@/styles/colors';

export const Route = createFileRoute('/palette')({
  component: RouteComponent,
});

function ColorPaletteGrid({ alpha }: { alpha: boolean }) {
  const colorScales = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className="space-y-8">
      {hueNames.map((family) => {
        return (
          <div key={family} className="space-y-2">
            <h2 className="text-xl font-semibold capitalize">{family}</h2>
            <div className="grid grid-cols-12 gap-2">
              {colorScales.map((scale) => {
                return (
                  <ColorSwatch
                    key={`${family}-${scale}`}
                    family={family}
                    scale={scale}
                    alpha={alpha}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ColorSwatch({
  family,
  scale,
  alpha: _alpha, // TODO: 알파 팔레트 지원 예정
}: {
  family: string;
  scale: number;
  alpha: boolean;
}) {
  // colors.ts에서 OKLCH 튜플 값 가져오기
  const palette = colors[family as HueName];
  const oklchTuple = palette?.[scale as Scale];

  // oklch() 함수로 감싸기
  const oklchValue = oklchTuple ?? 'transparent';

  // 보더 색상도 gray 팔레트에서 가져오기
  const grayPalette = colors.gray;
  const borderOklchTuple = grayPalette[7];
  const borderColor = borderOklchTuple;

  const isDarkTile = scale >= 9; // 9~12는 상대적으로 어두운 편
  const textColor = isDarkTile ? '#ffffff' : '#000000';

  return (
    <div
      className="group relative h-24 cursor-pointer overflow-hidden rounded-lg border transition-transform hover:scale-105"
      style={{
        backgroundColor: oklchValue,
        borderColor: borderColor,
      }}
    >
      <div
        className="absolute inset-0 flex flex-col justify-between p-2"
        style={{ color: textColor }}
      >
        <div className="font-mono text-xs font-semibold">{scale}</div>
        <div className="truncate font-mono text-[10px] opacity-80">
          {oklchValue}
        </div>
      </div>
      <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/5" />
    </div>
  );
}

function RouteComponent() {
  const [alpha, setAlpha] = useState(false);
  const { resolvedTheme, toggleTheme } = useTheme();

  return (
    <div className="bg-(--gray-1) p-8 text-(--gray-12) transition-colors">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h1 className="text-3xl font-bold">Color Palette</h1>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="rounded-md border px-3 py-1 text-sm"
            onClick={() => setAlpha((v) => !v)}
          >
            {alpha ? 'Alpha: On' : 'Alpha: Off'}
          </button>
          <button
            type="button"
            className="rounded-md border px-3 py-1 text-sm"
            onClick={toggleTheme}
          >
            {resolvedTheme === 'dark' ? 'Dark: On' : 'Dark: Off'}
          </button>
        </div>
      </div>
      <ColorPaletteGrid alpha={alpha} />
    </div>
  );
}
