'use client';

import { useState } from 'react';
import type { GraphNode, GraphEdge } from '@/data/projects';

const CAT_COLORS: Record<GraphNode['cat'], string> = {
  frontend: '#E6F1FB',
  backend: '#EEEDFE',
  ai: '#FAEEDA',
  data: '#E1F5EE',
  infra: '#F1EFE8',
};

const CAT_STROKE: Record<GraphNode['cat'], string> = {
  frontend: '#B3D4F0',
  backend: '#C9C6F0',
  ai: '#E8D4A8',
  data: '#A8DFC8',
  infra: '#D8D4C8',
};

const CAT_LABELS: Record<GraphNode['cat'], string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  ai: 'AI / ML',
  data: 'Data',
  infra: 'Infrastructure',
};

interface Props {
  nodes: GraphNode[];
  edges: GraphEdge[];
}

export default function ArchitectureGraph({ nodes, edges }: Props) {
  const [selected, setSelected] = useState<GraphNode | null>(null);

  if (nodes.length === 0) {
    return (
      <div className="border border-outline-variant bg-surface-container p-12 text-center">
        <span className="font-space-grotesk text-sm text-on-surface-variant">Architecture graph coming soon</span>
      </div>
    );
  }

  const nodeMap = new Map(nodes.map((n) => [n.id, n]));

  // Build curved path between two nodes
  function edgePath(from: GraphNode, to: GraphNode): string {
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    // unit vector
    const ux = dx / dist;
    const uy = dy / dist;
    // start/end offset by radius
    const x1 = from.x + ux * from.r;
    const y1 = from.y + uy * from.r;
    const x2 = to.x - ux * to.r;
    const y2 = to.y - uy * to.r;
    // control point perpendicular offset for curve
    const mx = (x1 + x2) / 2 - (y2 - y1) * 0.15;
    const my = (y1 + y2) / 2 + (x2 - x1) * 0.15;
    return `M${x1},${y1} Q${mx},${my} ${x2},${y2}`;
  }

  return (
    <div className="space-y-4">
      {/* Legend */}
      <div className="flex flex-wrap gap-4">
        {Object.entries(CAT_LABELS).map(([cat, label]) => (
          <div key={cat} className="flex items-center gap-1.5">
            <span
              className="inline-block w-3 h-3 rounded-full border"
              style={{
                backgroundColor: CAT_COLORS[cat as GraphNode['cat']],
                borderColor: CAT_STROKE[cat as GraphNode['cat']],
              }}
            />
            <span className="font-space-grotesk text-[10px] uppercase tracking-wider text-on-surface-variant">{label}</span>
          </div>
        ))}
      </div>

      {/* SVG Graph */}
      <div className="border border-outline-variant bg-white overflow-hidden">
        <svg viewBox="0 0 640 400" className="w-full h-auto" style={{ minHeight: 280 }}>
          <defs>
            <marker id="arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
              <path d="M0,0 L8,3 L0,6" fill="none" stroke="#bbb" strokeWidth="1" />
            </marker>
          </defs>

          {/* Edges */}
          {edges.map(([fromId, toId], i) => {
            const from = nodeMap.get(fromId);
            const to = nodeMap.get(toId);
            if (!from || !to) return null;
            return (
              <path
                key={i}
                d={edgePath(from, to)}
                fill="none"
                stroke="#d0d0d0"
                strokeWidth="1.5"
                markerEnd="url(#arrow)"
              />
            );
          })}

          {/* Nodes */}
          {nodes.map((node) => (
            <g
              key={node.id}
              className="cursor-pointer"
              onClick={() => setSelected(selected?.id === node.id ? null : node)}
            >
              <circle
                cx={node.x}
                cy={node.y}
                r={node.r}
                fill={CAT_COLORS[node.cat]}
                stroke={selected?.id === node.id ? '#1a1a1a' : CAT_STROKE[node.cat]}
                strokeWidth={selected?.id === node.id ? 2.5 : 1.5}
              />
              <text
                x={node.x}
                y={node.y - 4}
                textAnchor="middle"
                className="font-space-grotesk"
                fontSize="9"
                fontWeight="700"
                fill="#1a1a1a"
              >
                {node.label}
              </text>
              <text
                x={node.x}
                y={node.y + 8}
                textAnchor="middle"
                className="font-space-grotesk"
                fontSize="7"
                fill="#6b6b6b"
              >
                {node.sub}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* Inspect panel */}
      {selected && (
        <div className="border border-outline-variant bg-surface-container p-5 space-y-3 animate-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between">
            <h4 className="font-space-grotesk text-sm font-bold text-on-surface uppercase tracking-tight">
              {selected.label}
            </h4>
            <span
              className="inline-block text-[9px] font-space-grotesk uppercase tracking-wider px-2 py-0.5 border rounded-full"
              style={{
                backgroundColor: CAT_COLORS[selected.cat],
                borderColor: CAT_STROKE[selected.cat],
                color: '#1a1a1a',
              }}
            >
              {CAT_LABELS[selected.cat]}
            </span>
          </div>
          <p className="text-sm text-on-surface-variant font-body leading-relaxed">{selected.info}</p>
          {selected.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {selected.tags.map((t) => (
                <span key={t} className="font-space-grotesk text-[9px] border border-outline-variant px-2 py-0.5 text-on-surface-variant uppercase tracking-wider">
                  {t}
                </span>
              ))}
            </div>
          )}
          <button
            onClick={() => setSelected(null)}
            className="font-space-grotesk text-[10px] text-on-surface-variant uppercase tracking-wider hover:text-primary-container transition-colors"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
