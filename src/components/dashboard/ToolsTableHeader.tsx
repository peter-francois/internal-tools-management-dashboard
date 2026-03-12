export default function ToolsTableHeader() {
  return (
    <div className="mb-10 flex items-center justify-between">
      <h2>Recent Tools</h2>
      <div className="flex items-center gap-2">
        <span>📅</span>
        <p>Last 30 days</p>
      </div>
    </div>
  );
}
