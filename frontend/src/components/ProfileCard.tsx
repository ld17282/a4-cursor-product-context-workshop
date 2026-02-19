type ProfileCardProps = {
    name: string;
    title: string;
    bio: string;
    avatarUrl?: string;
  };
  
  export default function ProfileCard({
    name,
    title,
    bio,
    avatarUrl,
  }: ProfileCardProps) {
    return (
      <div className="min-h-screen bg-zinc-900 text-zinc-100 flex items-center justify-center p-6">
        <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-xl">
          <div className="flex items-start gap-4">
            {/* Default avatar: blank circle */}
            <div className="h-14 w-14 rounded-full bg-zinc-700/60 ring-1 ring-zinc-700 overflow-hidden shrink-0">
            {/* Conditional rendering for avatar image */}
              {avatarUrl ? (
                <img
                  src={avatarUrl}
                  alt={`${name} avatar`}
                  className="h-full w-full object-cover"
                />
              ) : null}
            </div>
  
            <div className="min-w-0">
              {/* Intentionally “off” typography to improve via rules */}
              <h1 className="text-2xl font-bold tracking-tight text-white">
                {name}
              </h1>
              <p className="mt-1 text-sm font-medium text-zinc-400">{title}</p>
            </div>
          </div>
  
          <p className="mt-5 text-sm leading-relaxed text-zinc-300">{bio}</p>
  
          <div className="mt-6 flex gap-2">
            <button className="rounded-lg bg-white px-3 py-2 text-sm font-semibold text-zinc-950">
              Follow
            </button>
            <button className="rounded-lg border border-zinc-700 px-3 py-2 text-sm text-zinc-100">
              Message
            </button>
          </div>
        </div>
      </div>
    );
  }
  