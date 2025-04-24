import PannellumViewer from './components/PannellumViewer';

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">360° Panorama Viewer</h1>
        <PannellumViewer
          imageUrl="/panaroma.jpg"
          config={{
            title: '360° View',
            author: 'Your Name',
            pitch: 0,
            yaw: 0,
            hfov: 100,
          }}
        />
      </main>
    </div>
  );
}
