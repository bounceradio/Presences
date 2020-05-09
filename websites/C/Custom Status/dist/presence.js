const presence = new Presence({
    clientId: "673651706139246612"
});
presence.on("UpdateData", () => {
    document.querySelector("#__nuxt") &&
        !document.querySelector("#__nuxt").classList.contains("presence")
        ? document.querySelector("#__nuxt").classList.add("presence")
        : false;
    const objectElement = document.querySelector("#object");
    if (objectElement &&
        objectElement.textContent &&
        JSON.parse(objectElement.textContent) &&
        Object.keys(JSON.parse(objectElement.textContent)).length > 0 &&
        JSON.parse(objectElement.textContent).details &&
        JSON.parse(objectElement.textContent).largeImageKey) {
        presence.setActivity(JSON.parse(objectElement.textContent));
    }
    else
        presence.setActivity();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9wcmVzZW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQztJQUM1QixRQUFRLEVBQUUsb0JBQW9CO0NBQy9CLENBQUMsQ0FBQztBQUVILFFBQVEsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRTtJQUM3QixRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztRQUNqQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7UUFDL0QsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7UUFDN0QsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUVWLE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFeEQsSUFDRSxhQUFhO1FBQ2IsYUFBYSxDQUFDLFdBQVc7UUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDO1FBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQztRQUM3RCxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPO1FBQzdDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLGFBQWEsRUFDbkQ7UUFDQSxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7S0FDN0Q7O1FBQU0sUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ2hDLENBQUMsQ0FBQyxDQUFDIn0=