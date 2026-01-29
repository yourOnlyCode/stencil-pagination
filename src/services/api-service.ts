class ApiService {
  private incomingApiUrl = 'https://api.example.com/incoming';
  private outgoingApiUrl = 'https://api.example.com/outgoing';

  async fetchInitialData(): Promise<any> {
    try {
      const response = await fetch(this.incomingApiUrl);
      if (!response.ok) throw new Error('Failed to fetch data');
      return await response.json();
    } catch (error) {
      console.error('Error fetching initial data:', error);
      throw error;
    }
  }

  async submitForm(formData: any): Promise<any> {
    try {
      const response = await fetch(this.outgoingApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) throw new Error('Failed to submit form');
      return await response.json();
    } catch (error) {
      console.error('Error submitting form:', error);
      throw error;
    }
  }
}

export const apiService = new ApiService();
