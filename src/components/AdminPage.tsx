import { useRef, useState } from 'react';
import Button from './button';
import { auth, databases, storage } from '../appwrite';
import { ID } from 'appwrite';
// import { createDoc } from "../appwrite";

function Switcher({
  isBlog,
  setIsBlog,
}: {
  isBlog: boolean;
  setIsBlog: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      className={`inline-flex items-center rounded-3xl  w-14  p-1 ${
        isBlog ? 'bg-primary justify-end' : 'bg-white justify-start'
      }`}
      onClick={() => {
        setIsBlog(!isBlog);
      }}
    >
      <div className="size-5 rounded-full bg-black p-1 text-center text-[8px]">
        {' '}
        {isBlog ? 'Y' : 'N'}
      </div>
    </div>
  );
}

function AdminPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [isBlog, setIsBlog] = useState(false);
  const [isPosted, setIsPosted] = useState(false);
  const imageRef = useRef<null | HTMLInputElement>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState<{
    email: string;
    phone: string;
    name: string;
  } | null>(null);
  const bucketID = import.meta.env.VITE_APPWRITE_BUCKET_ID ?? '';
  const databaseID = import.meta.env.VITE_APPWRITE_DATABASE_ID ?? '';
  const collectionID = import.meta.env.VITE_APPWRITE_COLLECTION_ID ?? '';

  async function getUser() {
    const userRes = await auth.get();
    setUser(userRes);
    return userRes;
  }

  async function login() {
    try {
      await auth.createEmailPasswordSession(email, password);
      await getUser();
    } catch (error) {
      console.log('====================================');
      console.log(error);
      console.log('====================================');
    }
  }

  async function createDoc() {
    let imageURL = '';
    if (imageRef.current && imageRef.current.files) {
      const resImage = await storage.createFile(
        bucketID,
        ID.unique(),
        imageRef.current.files[0]
      );
      imageURL = storage.getFileView(bucketID, resImage.$id).toString();
    } else {
      return;
    }
    await databases.createDocument(databaseID, collectionID, ID.unique(), {
      title,
      description,
      isBlog,
      image: imageURL,
      link,
    });
    setIsPosted(true);
    setTitle('');
    setDescription('');
    setIsBlog(false);
    setTimeout(() => {
      setIsPosted(false);
    }, 1000);
  }
  return (
    <div className="w-[550px] mx-auto space-y-10 pb-20">
      {!user ? (
        <>
          {' '}
          <h2>Login</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              login();
            }}
          >
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              required
              style={{
                opacity: 1,
                background: 'black',
                padding: '5px',
                borderRadius: '10px',
                width: ' 100%',
              }}
            />
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
              required
              style={{
                opacity: 1,
                background: 'black',
                padding: '5px',
                borderRadius: '10px',
                width: ' 100%',
              }}
            />
            <Button text={'Login'} action={login} />
          </form>
        </>
      ) : (
        <>
          <h2>Add a Blog or Project</h2>
          {isPosted ? (
            <p>Posted Successfully</p>
          ) : (
            <form
              className=" space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                createDoc();
              }}
            >
              <div>
                <label htmlFor="title">Title</label>
                <br />
                <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.currentTarget.value);
                  }}
                  style={{
                    opacity: 1,
                    background: 'black',
                    padding: '5px',
                    borderRadius: '10px',
                    width: ' 100%',
                  }}
                />
              </div>
              <div>
                <label htmlFor="description">Description</label>
                <br />
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => {
                    setDescription(e.currentTarget.value);
                  }}
                  name="description"
                  style={{
                    opacity: 1,
                    background: 'black',
                    padding: '5px',
                    borderRadius: '10px',
                    width: ' 100%',
                  }}
                />
              </div>
              <div>
                <label htmlFor="isBlog">Is this a blog?</label>
                <br />
                <Switcher isBlog={isBlog} setIsBlog={setIsBlog} />
              </div>
              <div>
                <label htmlFor="description">Image</label>
                <br />
                <input
                  type="file"
                  name="image"
                  ref={imageRef}
                  accept=".png, .jpeg, .jpg"
                  style={{
                    opacity: 1,
                    background: 'black',
                    padding: '5px',
                    borderRadius: '10px',
                    width: ' 100%',
                  }}
                />
              </div>
              <div>
                <label htmlFor="title">Link</label>
                <br />
                <input
                  type="text"
                  name="title"
                  value={link}
                  onChange={(e) => {
                    setLink(e.currentTarget.value);
                  }}
                  style={{
                    opacity: 1,
                    background: 'black',
                    padding: '5px',
                    borderRadius: '10px',
                    width: ' 100%',
                  }}
                />
              </div>

              <Button text="Submit" action={() => {}} />
            </form>
          )}
        </>
      )}
    </div>
  );
}

export default AdminPage;
