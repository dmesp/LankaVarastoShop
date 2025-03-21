const backendApiUrl = "http://localhost:1337/api/";

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface ApiResponse<T> {
  resdata?: T;
  error?: string;
}

const makeRequest = async <T>(endpoint: string, method: RequestMethod, data: any = null): Promise<ApiResponse<T>> => {
  console.log("mkreq")
  console.log(method)
  console.log(data)

  const config: RequestInit = {
    method, 
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Для методов POST, PUT и DELETE добавляем данные в body
  if (method !== 'GET' && data !== null) {
    config.body = JSON.stringify({ data });
  }
  console.log(`${backendApiUrl}${endpoint}`, config)
  try {
    const response = await fetch(`${backendApiUrl}${endpoint}`, config);

    if (!response.ok) {
      const errorText = await response.json();
      console.error(`${response.status} - ${errorText.error}`);
      throw new Error(errorText.error); 
    }

    const resdata = await response.json();
    return { resdata };
  } 
  catch (error) {
    console.error("Error message:", error);
    throw new Error(`${error}`);
  }
}

export default makeRequest;